public class Main {
    public static void main(String args[]) {
        for (int i=__ITERS__;i>1;--i) {
            factorial(i);
        }

        System.out.println("end");
    }

    public static int factorial(int number) {
        if (number == 2) {
            return 2;
        } else {
            return number * factorial(number - 1);
        }
    }
}
