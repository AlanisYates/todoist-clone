import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeNull = true }) => {
    const [active, setActive] = useState(activeNull);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectValue();


    return (
        projects &&
        projects.map(project => (
            <li
                key={project.docId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectId
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <IndividualProject project={project} />
            </li>
        ))
    )
}