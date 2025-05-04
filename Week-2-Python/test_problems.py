from problems import reverse_string, find_max, is_palindrome

def test_reverse_string():
    assert reverse_string("word") == "drow"
    assert reverse_string("boo") == "oob"

def test_find_max():
    assert find_max([1, 2, 3, 4, 5]) == 5
    assert find_max([-2, -43, 0]) == 0

def test_is_palindrome():
    assert is_palindrome("racecar") == True
    assert is_palindrome("treat") == False 
    assert is_palindrome("tune") == False
    assert is_palindrome("sas") == True
