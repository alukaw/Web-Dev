def string_splosion(s):
    result = ""
    for i in range(len(s)):
        result += s[:i+1]
    return result