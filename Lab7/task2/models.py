class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity

    def get_category(self):
        return "General Product"

    def __str__(self):
        return f"{self.name} | Price: ${self.price} | Quantity: {self.quantity}"


class ElectronicProduct(Product):
    def __init__(self, name, price, quantity, brand):
        super().__init__(name, price, quantity)
        self.brand = brand

    def get_category(self):
        return "Electronic"

    def warranty(self):
        return f"{self.name} has 1 year warranty"

    def __str__(self):
        return f"{self.brand} {self.name} | Price: ${self.price} | Quantity: {self.quantity}"


class GroceryProduct(Product):
    def __init__(self, name, price, quantity, expiration_date):
        super().__init__(name, price, quantity)
        self.expiration_date = expiration_date

    def get_category(self):
        return "Grocery"

    def check_expiry(self):
        return f"{self.name} expires on {self.expiration_date}"

    def __str__(self):
        return f"{self.name} (expires: {self.expiration_date}) | Price: ${self.price} | Quantity: {self.quantity}"