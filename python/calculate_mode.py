def calculate_mode(lst):
    answer =[]
    freq = 0
    my_dict = {}
    for i in lst:
        times = lst.count(i)
        my_dict[i] = times
        if times > freq:
            freq = times

    for i in my_dict:
        if my_dict[i] == freq:
            answer.append(i)
    return answer 
