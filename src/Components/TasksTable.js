import React from 'react';
import { Table } from 'bloomer';
import '../styles/TasksTable.css';

const TasksTable = props => {
    console.log(props)
    return <div>
            <Table isBordered>
                <thead>
                    <tr className="tabletitles">
                        <th>Number</th>
                        <th>Tasks</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {props.task.map((task, index) => <tr key= { index }>
                            <th>{index + 1}</th>
                            <th>{task.description}</th>
                            <th>{task.value} Ether</th>
                        </tr>)}
                </tbody>
            </Table>
        </div>
};

export default TasksTable;
