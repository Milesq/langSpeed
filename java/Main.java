public class Main {
    public static void main(String args[]) {
        for (int i=__ITERS__;i>1;--i) {
            isPrime(i);
        }

        System.out.println("end");
    }

    public static boolean isPrime(int number) {
        for(int i=2;i <= number / 2;++i) {
            if (number % i == 0)
                return false;
        }

        return true;
    }
}