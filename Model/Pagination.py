class Pagination:
    def __init__(self):
        self.page = 1
        self.per_page = 20
        self.total_count = 0

    def __init__(self, page, per_page, total_count=0):
        self.page = page
        self.per_page = per_page
        self.total_count = total_count

    @property
    def pages(self):
        if self.total_count == 0:
            return 0
        elif self.total_count % self.per_page == 0:
            return self.total_count // self.per_page
        else:
            return self.total_count // self.per_page + 1

    @property
    def has_prev(self):
        return self.page > 1

    @property
    def has_next(self):
        return self.page < self.pages

    @property
    def prev_num(self):
        return self.page - 1

    @property
    def next_num(self):
        return self.page + 1

    # 定义一个名为iter_pages的方法，用于生成页码
    # left_edge表示最左边显示的页码数量，默认为2
    # left_current表示当前页左侧显示的页码数量，默认为2
    # right_current表示当前页右侧显示的页码数量，默认为5
    # right_edge表示最右边显示的页码数量，默认为2
    def iter_pages(self, left_edge=2, left_current=2,
                   right_current=5, right_edge=2):
        last = 0
        for num in range(1, self.pages + 1):  # 遍历所有页码
            if num <= left_edge or \
               (num > self.page - left_current - 1 and
                num < self.page + right_current) or \
               num > self.pages - right_edge:
                if last + 1 != num:  # 如果当前页和上一页不连续，生成空值
                    yield None
                yield num  # 生成当前页码
                last = num