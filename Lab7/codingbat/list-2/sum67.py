def sum67(nums):
    total = 0
    skip = False

    for x in nums:
        if x == 6:
            skip = True
        elif x == 7 and skip:
            skip = False
        elif not skip:
            total += x

    return total