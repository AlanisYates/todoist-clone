import React from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';

export const Tasks = () => {

    const { tasks } = useTasks('1');

    console.log(tasks);

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