import React from 'react';
import { Checkbox } from './Checkbox'

export const Tasks = () => {
    const tasks = [];

    let projectName = '';

    return (
        <div className="tasks" data-testId="tasks">
            <h2 data-testId="project-name">{projectName}</h2>

            <div className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </div>
        </div>
    );
};