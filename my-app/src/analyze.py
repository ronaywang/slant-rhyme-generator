vowels = "iyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒ"
vowelsounds = {
    'ʌ': 'osteoporosis',
    'e': 'ayy',
    'ɔ': 'oregon',
    'u': 'oodle',
    'ɪ': 'indicted',
    'ɑ': 'awesome',
    'ɛ': 'estrogen',
    'i': 'easter',
    'æ': 'absentee',
    'o': 'oh',
    'a': 'around',
    'ʊ': 'irkutsk'}

with open("Word-to-IPA.txt", "r", encoding='utf-8') as words:
    lines = words.readlines()
    i = 0;
    for line in lines:
        if ("XXXXX" in line):
            continue;
        nospace = line.split()
        word = nospace[0][:-1]
        ipa = nospace[1]
        ipavow = ""
        for letter in ipa:
            if letter in vowels:
                ipavow += letter
                if (letter not in vowelsounds):
                    vowelsounds[letter] = word
        if (len(ipavow) != 0 and word[0] in "aeiou" and ipavow[0] == 'ʊ'):
            print(word, ipavow)
        i += 1
        
print(vowelsounds)