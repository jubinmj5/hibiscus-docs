---
author: Rahul
tag: database
date: 2022-11-04
---

# Alembic migrations

### Create migration revision

```bash
alembic --config ./path-to-project/alembic.ini revision --autogenerate
```

### Run migration


```bash
alembic --config ./path-to-project/alembic.ini upgrade head
```