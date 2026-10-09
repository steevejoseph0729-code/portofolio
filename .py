filename = 'input1.txt'
def computer(filename):
  numofcharacter = 0
  numofwords = 0
  numoffiles = 0
  with open(filename,'r') as file:
    for line in file:
        numoflines = numoflines+1
        numofcharacter = numofcharacter+len(line)
        numofwords = numofwords+len(line.split())
    print(f"Number of lines:{numoflines}")
    print(f"Number of character:{numofcharacter}")
    print(f"Number of words:{numofwords}")
    compute(filename)