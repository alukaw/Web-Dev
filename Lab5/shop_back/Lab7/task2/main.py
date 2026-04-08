from models import Product, ElectronicProduct, GroceryProduct

def main():
    p1 = Product("Generic Item", 10, 5)
    p2 = ElectronicProduct("Laptop", 1200, 2, "Dell")
    p3 = GroceryProduct("Milk", 2, 10, "2026-03-25")

    products = [p1, p2, p3]

    for product in products:
        print(product)
        print("Category:", product.get_category())
        print("Total value:", product.total_value())

        if isinstance(product, ElectronicProduct):
            print(product.warranty())
        elif isinstance(product, GroceryProduct):
            print(product.check_expiry())

        print("-" * 40)

if __name__ == "__main__":
    main()