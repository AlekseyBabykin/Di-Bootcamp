class Pagination():
    def __init__(self,items = None, pageSize = 10) -> None:
        self.items = items
        self.pageSize = pageSize
        self.first_visible = 0
        self.last_visible = self.pageSize
        self.page = 1
        self.list_len = len(self.items)
        self.pages = int(len(self.items) / self.pageSize + 1)
        self.last_page_len = int(len(self.items) % self.pageSize) 
    
    def getVisibleItems(self) :   
        self.visible = self.items[self.first_visible:self.last_visible]
        return self.visible

    def nextPage(self):
        if 1 <= self.pag < self.pages - 1:
            self.first_visible += self.pageSize
            self.last_visible += self.pageSize
            self.page += 1
        elif self.page == self.pages - 1:
            self.first_visible += self.pageSize
            self.last_visible += self.last_page_len
            self.page += 1
        elif self.page == self.pages:
            print("current page is the last one")
        else:
            print(f"not correct page {self.page}")        
    
    def prevPage(self):
        if self.page == self.pages:
            self.fist_visible -= self.pageSize
            self.last_visible -= self.last_page_len
            self.page -= 1
        elif 1 < self.page < self.pages:
            self.first_visible -= self.pageSize
            self.last_visible -= self.pageSize
            self.page -= 1   
        elif self.page == 1:
            print("current page is the first one")
        else:
            print(f"not correct page {self.page}")        
    
    def fistPage(self):
        self.first_visible = 0
        if self.pageSize < self.list_len:
            self.last_visible = self.pageSize
        else:
            self.last_visible = self.list_len - 1
        self.page = 1    
                            
    def lastPage(self):
        self.first_visible = (self.pages - 1) * self.pageSize
        self.last_visible = self.list_len
        self.page = self.pages
                               
    def goToPage(self,pageNum):
        self.pageNum = int(pageNum)
        if self.pageNum < self.pages -1:
            self.firstPage()
        elif 0 < self.pageNum < self.pages - 1:
            self.first_visible = (self.pageNum - 1) * self.pageSize
            self.last_visible = self.pageNum * self.pageSize
            self.page = self.pageNum
        
        elif self.pageNum >= self.pages:
            self.lastPage()                           