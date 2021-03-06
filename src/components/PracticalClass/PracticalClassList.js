import React from 'react';

import PracticalClass from './PracticalClass';

import './practical-class.scss';

const PracticalClassList = ({ practicalClasses, students, cars, saveHasError, onEdit, onDelete, onMove, onManageEnrollment }) => (
  <div className='practical-class-list'>
    {practicalClasses.map((practicalClass, index) => (
      <PracticalClass
        key={practicalClass.id}
        practicalClass={practicalClass}
        students={students}
        cars={cars}
        index={index}
        total={practicalClasses.length}
        saveHasError={saveHasError}
        onEdit={onEdit}
        onDelete={onDelete}
        onMove={onMove}
        onManageEnrollment={onManageEnrollment}
      />
    ))}
  </div>
);

export default PracticalClassList;
