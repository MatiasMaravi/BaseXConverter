def decimal_to_binary(number):
    return format(int(number), 'b') 

def binary_to_decimal(number):
    temp = int(number, 2)
    return format(temp, 'd')

def decimal_to_hexadecimal(number):
    return format(int(number), 'X')

def hexadecimal_to_decimal(number):
    temp = int(number, 16)
    return format(temp, 'd')

def menu():
    print("""-------Welcome BaseXConverter-------
    1. Decimal to Binary
    2. Binary to Decimal
    3. Decimal to Hexadecimal
    4. Hexadecimal to Decimal
    5. Exit      
          """)
    opcion = int(input("Select an option: "))
    return opcion

def main():
    opcion = menu()
    while (opcion != 5):
        if opcion == 1:
            number = input("Enter a decimal number: ")
            print(decimal_to_binary(number))
        elif opcion == 2:
            number = input("Enter a binary number: ")
            print(binary_to_decimal(number))
        elif opcion == 3:
            number = input("Enter a decimal number: ")
            print(decimal_to_hexadecimal(number))
        elif opcion == 4:
            number = input("Enter a hexadecimal number: ")
            print(hexadecimal_to_decimal(number))
        else:
            print("Invalid option")
        opcion = menu()

main()