import * as db from './transcriptManager';
import { addStudent, StudentID } from './transcriptManager';

describe('Testing addStudent() method', () => {
  beforeEach(() => {
    db.initialize();
  });

  it('should create 4 dummy students when you call initialize()', () => {
    let transcripts = db.getAll();
    expect(transcripts.length).toBe(4);
  });

  it('should check valid inputs for addStudent()', () => {
    let length = db.getAll().length;
    let id = addStudent('Li');
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThanOrEqual(length);
  });

  it('should check invalid inputs for addStudent()', () => {
    expect(() => addStudent(null)).toThrow();
    expect(() => addStudent('')).toThrow();
    //expect(() => addStudent('A')).toThrow();
    //expect(() => addStudent('Abcd1234')).toThrow();
  });
});

describe('Testing getTranscript() and getStudentIDs()', () => {
describe('Testing addGrade() and getGrade()', () => {
  beforeEach(() => {
    db.initialize();
  });

  it('should add a grade to a student and retrieve it', () => {
    const all = db.getAll();
    const id = all[0].student.studentID;
    db.addGrade(id, 'CS101', 95);
    const grade = db.getGrade(id, 'CS101');
    expect(grade).toBe(95);
  });

  it('should throw when adding a duplicate course grade', () => {
    const all = db.getAll();
    const id = all[0].student.studentID;
    db.addGrade(id, 'CS102', 90);
    expect(() => db.addGrade(id, 'CS102', 85)).toThrow();
  });

  it('should throw when getting a grade for a non-existent course', () => {
    const all = db.getAll();
    const id = all[0].student.studentID;
    expect(() => db.getGrade(id, 'NONEXISTENT')).toThrow();
  });

  it('should throw when adding a grade to a non-existent student', () => {
    expect(() => db.addGrade(99999, 'CS999', 100)).toThrow();
  });
});
describe('Testing deleteStudent()', () => {
  beforeEach(() => {
    db.initialize();
  });

  it('should delete a student by ID', () => {
    const all = db.getAll();
    const idToDelete = all[0].student.studentID;
    db.deleteStudent(idToDelete);
    const afterDelete = db.getAll();
    expect(afterDelete.find(t => t.student.studentID === idToDelete)).toBeUndefined();
  });

  it('should throw when deleting a non-existent student', () => {
    expect(() => db.deleteStudent(99999)).toThrow();
  });
});
  beforeEach(() => {
    db.initialize();
  });

  it('should return the correct transcript for a student ID', () => {
    const all = db.getAll();
    const transcript = db.getTranscript(all[0].student.studentID);
    expect(transcript).toBeDefined();
    expect(transcript.student.studentName).toBe(all[0].student.studentName);
    expect(transcript.grades).toEqual(all[0].grades);
  });

  it('should return all student IDs for a given name', () => {
    
    const ids = db.getStudentIDs('Jasur');
    expect(Array.isArray(ids)).toBe(true);
    expect(ids.length).toBe(2);
    
    ids.forEach(id => expect(typeof id).toBe('number'));
  });

  it('should return an empty array for a non-existent student name', () => {
    const ids = db.getStudentIDs('NonExistentName');
    expect(ids).toEqual([]);
  });
});
