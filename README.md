# kowix

This project have compatibility with my old project.
The original project (now deprecated): [https://gitlab.com/voxsoftware/kowix](https://gitlab.com/voxsoftware/kowix/tree/v2.x)


Now this project was rewritten using [**@kawix/dhs**](https://github.com/voxsoftware/kawix/tree/master/dhs). Technically only adds some usefull ready to use **APIS** for use inside other projects with **@kawix/dhs**


You can use kowix for this purposes: 

* Automatic nginx configuration files for projects (including SSL). See the note*
* SharedMemory in **kawix/dhs** clusters
* Shared code execution between clusters in **kawix/dhs**
* Auto download and start a MongoDB instance with zero install configuration
* MongoDB query,update,insert,remove ready-to-use API with chained relations, advanced query, selectable fields projections and limits by rules configuration (permissions/restricted fields, etc)


NOTE: Nginx configuration require root privileges. If the project is not started with root, users need have privileges of run ```sudo``` without password