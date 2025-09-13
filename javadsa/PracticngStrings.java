public class PracticngStrings {
    public static void main(String[] args)
    {
        String str = "PANAP";
        String s = "";

        for(int i=str.length();i>=0;i--)
        {
            s+=str.charAt(i);
        }

        if(str.equals(s))
        {
            System.out.println(true);
        }
        else
        {
            System.out.println(false);
            
        }
    }
    
}
