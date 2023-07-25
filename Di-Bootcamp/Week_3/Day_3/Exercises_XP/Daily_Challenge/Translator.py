from translate import Translator


translator = Translator(from_lang="FR",to_lang="EN")
french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
all_translate = {}
for i in french_words:
    all_translate[i]= translator.translate(i)
print(all_translate)