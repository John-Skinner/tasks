# tasks

## Tables
### Task Table
The Task table represents a task, or unit of work, that is to be tracked.
Task_ID is automatically generated.
The estimated time is in hours.
The priority is either 'high', 'medium', or 'low'.
The status is 'pending', 'active', or 'done'.

| Descripton    | ID                    | Estimated_Time | Priority | STATUS |
|---------------|-----------------------|----------------| --- | --- |
| CHARACTOR(24) | INTEGER (PRIMARY KEY) | INTEGER        | INTEGER | CHARACTOR(10) |

Table Creation
```
create table Task ( 
  Description CHAR(24), 
  Task_ID INTEGER PRIMARY KEY, 
  Estimated_Time INTEGER,
  Status CHAR(10)
);
```
### Task Dependencies table 

The tasks dependencies table describes when one task depends on another task being done
before the task can be completed.
Task_ID is any task.
The Depends_On_Task is another task that Task_ID depends on.
| Task_ID | Depends_On_Task |
| --- | --- |
| INTEGER | INTEGER |
```
create table Task_Deps (  
  Task_ID INTEGER, 
  Depends_On_Task INTEGER
);
```
### Team Member Table
The team member table describes members of the team that can be assigned a set of tasks.
The Workload_PerWeek describes how much time a member has in a week to work on tasks.
The ID is the team member's ID, and is auto-generated.

| Name | Workload_Per_Week | ID |
| --- | --- | --- |
| CHARACTOR(24) | INTEGER | INTEGER (PRIMARY_KEY) |
```
create table Team_Member (
Name CHAR(24),
Workoad_Per_Week INTEGER,
ID Integer PRIMARY KEY
);
```
## Task Assignment Table

The task assignment table describes who is assigned to each task.

| Task_ID | AssignedTo | 
| --- | --- |
| INTEGER | INTEGER |

```
create table Task_Assignment (
Task_ID INTEGER,
Assigned_To INTEGER
);
```

```
create table task (id integer,desc char(24), primary key(id));
insert into task (id,desc) values(1,'item1')
insert into task (id,desc) values(2,'item2')
```

```
select * from task where desc='item1';
```

