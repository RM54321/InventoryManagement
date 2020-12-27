# InventoryManagement

Inventory Management is a GUI project creatd using HTML 5,Sass,Javascript and Ajax. It connects with a separate spring boot project(InventoryApi) via REST services.
The application provides the interface for users to add new items to the inventory and also update and delete the items.PostGre is used as the database for the backend application.The interface also has search and sort items feature and pagination is also incorporated .

## Installation

After installing node.js,use the node package manager(npm) to run the sass files.The scss folder contains the sass files .The following command should be used for this:

npm run scss

Postgre database should be installed in the system.Next,the backend of the application(InventoryApi) should be started .The Rest calls can be seen running in the system .

## Usage

```
http://localhost:8081/inventories/items -Add Items
http://localhost:8081/inventories/items/{itemid}/update-Update Items
http://localhost:8081/inventories/items/{itemid}/delete

```
