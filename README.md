# InventoryManagement

Inventory Management is a GUI project creatd using HTML 5,Sass,Javascript and Ajax. It connects with a separate spring boot project(InventoryApi) via REST services.
The application provides the interface for users to add new items to the inventory and also update and delete the items.PostGre is used as the database for the backend application.The interface also has search and sort items feature and pagination is also incorporated .

## Screenshots
Inventory Home Page(View All Items)
![HomePage](https://user-images.githubusercontent.com/29458723/103462898-84496380-4cf6-11eb-9fea-4dc386e5f114.png)

Add New Item Popup
![AddItems](https://user-images.githubusercontent.com/29458723/103462896-801d4600-4cf6-11eb-9490-cd6fb071889e.png)

Search Item
![Search](https://user-images.githubusercontent.com/29458723/103462900-86132700-4cf6-11eb-960d-97f69ca52c7c.png)

Items WebService
![webservice](https://user-images.githubusercontent.com/29458723/103462902-87dcea80-4cf6-11eb-977f-6b667067dce4.png)

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
