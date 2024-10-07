import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, filter, searchTerm } = useSelector(state => state.tasks);

    // filter task
    const filteredTasks = tasks.filter(task =>
        task && task.title &&
        (filter === 'all' || (filter === 'completed' && task?.completed) || (filter === 'incomplete' && !task?.completed)) &&
        task?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    return (
        <div>
            {filteredTasks.map(task => (
                <TaskItem key={task?.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
