# tasks

## Tables
### Task Table
| Task_Desc     | Task_ID               | Estimated_Time | Priority | STATUS |
|---------------|-----------------------|----------------| --- | --- |
| CHARACTOR(20) | INTEGER (PRIMARY KEY) | INTEGER        | INTEGER | CHARACTOR(10) |

### Task Dependencies table 
| Task_ID | Depends_On_Task |
| --- | --- |
| INTEGER | INTEGER |

### Team Member Table
| Name | Workload_Per_Week | ID |
| CHARACTOR(24) | INTEGER | INTEGER (PRIMARY_KEY) |
## Task Assignment Table
| Task_ID | AssignedTo | 
| --- | --- |
| INTEGER | INTEGER |
