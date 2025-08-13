#!/usr/bin/env python3
'''function that returns the size in tuple'''


def index_range(page, page_size):
    '''Calculation of indices'''

    Start = (page - 1) * page_size
    End = Start + page_size
    result = (Start, End)
    return result
