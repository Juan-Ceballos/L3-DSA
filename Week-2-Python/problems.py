def reverse_string(s):
    res = ""
    for char in s:
        res = char + res
    return res

print(reverse_string("boo"))


def find_max(list):
    result_num = list[0]

    for num in list:
        if num > result_num:
            result_num = num
    
    return result_num

print(find_max([0, 2, 4, 2]))


def is_palindrome(s):
    temp_str = s 
    res = ""
    for char in s:
        curr_char = temp_str[len(temp_str) - 1]
        temp_str = temp_str[:-1]
        if char != curr_char:
            return False

    return True

print(is_palindrome("racecar"))
print(is_palindrome("treat"))