import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        { id: 'Assignment-1', assignmentMarks: 60, quizMarks: 10 },
        { id: 'Assignment-2', assignmentMarks: 20, quizMarks: 5 },
        { id: 'Assignment-3', assignmentMarks: 58, quizMarks: 9 },
        { id: 'Assignment-4', assignmentMarks: 45, quizMarks: 7 },
        { id: 'Assignment-5', assignmentMarks: 40, quizMarks: 5 },
        { id: 'Assignment-6', assignmentMarks: 58, quizMarks: 3 },
        { id: 'Assignment-7', assignmentMarks: 35, quizMarks: 10 },
        { id: 'Assignment-8', assignmentMarks: 50, quizMarks: 8 },
        { id: 'Assignment-9', assignmentMarks: 58, quizMarks: 4 },
    ]

    return (
        <div>
            <LineChart height={400} width={1500} data={data}>
                <Line type="monotone" dataKey="assignmentMarks" stroke="#8884d8"></Line>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;