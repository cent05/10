package DuckBehaviour;

public interface QuackBehaviour { 
    public default void quack() 
    {
        System.out.println("Quack");
    }
} 