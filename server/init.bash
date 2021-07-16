# sequelize model:generate --name users \
# --attributes email:string,password:string,firstName:string,lastName:string,phoneNumber:string

# sequelize model:generate --name products \
# --attributes name:string,price:decimal,size:string,description:text,image:json

# sequelize model:generate --name orders \
# --attributes userId:integer,transactionId:string,payment_method:string

# sequelize model:generate --name product_orders \
# --attributes productId:integer,orderId:integer