def get_categories_stat(request):
    categories = Category.objects.all()
    data = []
    for c in categories:
        numer = 0
        denom = 0
        cat_products = Product.objects.filter(category_id = c.id)
        for p in cat_products:
            numer += p.price * p.count
            denom += p.count
        avg_price = numer / denom if denom != 0 else 0
        data.append({
            'id': c.id,
            'name': c.name,
            'avg_price': avg_price
        })
    return JsonResponse(data, safe=False)
