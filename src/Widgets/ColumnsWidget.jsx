import React from 'react';
import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';
import { omit, without } from 'lodash';
import move from 'lodash-move';
import { Icon, FormFieldWrapper, DragDropList } from '@plone/volto/components';
import { emptyBlocksForm } from '@plone/volto/helpers';

import dragSVG from '@plone/volto/icons/drag.svg';
import trashSVG from '@plone/volto/icons/delete.svg';
import plusSVG from '@plone/volto/icons/circle-plus.svg';

export function moveColumn(formData, source, destination) {
  return {
    ...formData,
    blocks_layout: {
      items: move(formData.blocks_layout?.items, source, destination),
    },
  };
}

const empty = () => {
  return [uuid(), emptyBlocksForm()];
};

const ColumnsWidget = (props) => {
  const { value = {}, id, onChange, maxSize = 4 } = props;
  const { blocks = {} } = value;
  const columnsList = (value.blocks_layout?.items || []).map((id) => [
    id,
    blocks[id],
  ]);

  const showAdd = value.blocks_layout?.items?.length < maxSize;
  return (
    <FormFieldWrapper
      {...props}
      draggable={false}
      className="drag-drop-list-widget"
    >
      <div className="columns-area">
        <DragDropList
          childList={columnsList}
          onMoveItem={(result) => {
            const { source, destination } = result;
            if (!destination) {
              return;
            }
            const newFormData = moveColumn(
              value,
              source.index,
              destination.index,
            );
            onChange(id, newFormData);
            return true;
          }}
        >
          {(dragProps) => {
            const { childId, index, draginfo } = dragProps;
            return (
              <div ref={draginfo.innerRef} {...draginfo.draggableProps}>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      visibility: 'visible',
                      display: 'inline-block',
                    }}
                    {...draginfo.dragHandleProps}
                    className="drag handle wrapper"
                  >
                    <Icon name={dragSVG} size="18px" />
                  </div>
                  <div className="column-area">
                    <div className="label">
                      <FormattedMessage id="Column" defaultMessage="Column" />{' '}
                      {index + 1}
                    </div>
                    {value.blocks_layout?.items?.length > 1 ? (
                      <button
                        onClick={() => {
                          const newFormData = {
                            ...value,
                            blocks: omit({ ...value.blocks }, [childId]),
                            blocks_layout: {
                              ...value.blocks_layout,
                              items: without(
                                [...value.blocks_layout?.items],
                                childId,
                              ),
                            },
                          };
                          onChange(id, newFormData);
                        }}
                      >
                        <Icon name={trashSVG} size="18px" />
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        </DragDropList>
        {showAdd ? (
          <button
            onClick={() => {
              const [newId, newData] = empty();
              onChange(id, {
                ...value,
                blocks: {
                  ...value.blocks,
                  [newId]: newData,
                },
                blocks_layout: {
                  ...value.blocks_layout,
                  items: [...value.blocks_layout?.items, newId],
                },
              });
            }}
          >
            <Icon name={plusSVG} size="18px" />
          </button>
        ) : (
          ''
        )}
      </div>
    </FormFieldWrapper>
  );
};

export default ColumnsWidget;
