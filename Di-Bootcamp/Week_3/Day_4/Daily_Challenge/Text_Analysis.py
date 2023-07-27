from collections import Counter
import string
from stop_words import get_stop_words


a = "A good book would sometimes cost as much as a good house."

class Text():
    def __init__(self, text) -> None:
        self.text = text
        
    def frequency_of_word(self):
        all_words = Counter(self.text.lower().split(" ")).most_common()
        return print(all_words)
    def unique_words(self):
        un_words = set(self.text.split(" "))
        return print(un_words)

    def classmethod(self):
        with open("the_stranger.txt", "r") as file:
            self.text = file.read().replace("\n","")
        return self.text
 
class TextModification (Text):
    
    def any_punctuation(self):
        return self.classmethod().translate(str.maketrans('', '', string.punctuation))
                
    def english_stop(self):
        stop_words = list(get_stop_words('en'))         
        # nltk_words = list(stopwords.words('english')) 
        # stop_words.extend(nltk_words)

        output = [w for w in self.any_punctuation().split(" ") if not w in stop_words]
        return output
    def non_spec(self):
        a = [i for i in self.english_stop() if i.isalnum]
        return print(*a)
           
# c = Text(a)
# c.frequency_of_word()
# c.unique_words()
# print(c.classmethod())
g = TextModification(a)
# g.any_punctuation()
g.non_spec()

