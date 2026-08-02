import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableSectionItem({ id, section, toggleVisibility }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded shadow-sm border ${
        isDragging ? 'border-primary' : 'border-light'
      }`}
    >
      <div className="d-flex align-items-center">
        <div
          {...attributes}
          {...listeners}
          className="me-3"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', color: '#adb5bd' }}
        >
          <i className="bi bi-list fs-4"></i>
        </div>
        <span className="fw-bold" style={{ color: section.visible ? '#333' : '#adb5bd' }}>
          {section.title}
        </span>
      </div>
      
      <div className="form-check form-switch mb-0">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked={section.visible}
          onChange={() => toggleVisibility(id)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default function SectionManagerModal({ isOpen, onClose, sectionsConfig, setSectionsConfig, resetLayout }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sectionsConfig.findIndex((item) => item.id === active.id);
      const newIndex = sectionsConfig.findIndex((item) => item.id === over.id);

      setSectionsConfig((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const toggleVisibility = (id) => {
    setSectionsConfig((items) =>
      items.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4">
          <div className="modal-header border-bottom-0 pb-0">
            <h5 className="modal-title fw-bold">
              <i className="bi bi-layout-text-sidebar-reverse me-2 text-primary"></i>
              Manage Sections
            </h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          
          <div className="modal-body px-4 py-3">
            <p className="text-muted small mb-4">
              Drag sections to reorder them on your resume. Toggle the switch to show or hide a section.
            </p>
            
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={sectionsConfig.map((s) => s.id)}
                strategy={verticalListSortingStrategy}
              >
                {sectionsConfig.map((section) => (
                  <SortableSectionItem
                    key={section.id}
                    id={section.id}
                    section={section}
                    toggleVisibility={toggleVisibility}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </div>
          
          <div className="modal-footer border-top-0 pt-0 d-flex justify-content-between">
            <button 
              type="button" 
              className="btn btn-light rounded-3" 
              onClick={resetLayout}
            >
              <i className="bi bi-arrow-counterclockwise me-1"></i> Reset Layout
            </button>
            <button type="button" className="btn btn-primary rounded-3 px-4" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
