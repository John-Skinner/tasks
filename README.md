# tasks

## Tables
### Task Table
| Task_Desc     | Task_ID               | Estimated_Time | Priority | STATUS |
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
| Task_ID | AssignedTo | 
| --- | --- |
| INTEGER | INTEGER |

```angular2html
create table Task_Assignment (
Task_ID INTEGER,
Assigned_To INTEGER
);
```
