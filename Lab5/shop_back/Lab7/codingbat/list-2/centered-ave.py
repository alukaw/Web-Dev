def centered_average(nums):
    nums = sorted(nums)
    return sum(nums[1:-1]) // (len(nums) - 2)