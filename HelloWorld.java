import java.util.Scanner;
class HelloWorld{
    public static void main(String[] args){
        System.out.println("Hello World! Testing!!!");
        Scanner input = new Scanner(System.in);

        System.out.println("Please enter a value: ");
        String number = input.nextLine();

        System.out.println("That value was: " + number);
        //input.close();
        // Figure out how to get the Scanner to work.
    }
}