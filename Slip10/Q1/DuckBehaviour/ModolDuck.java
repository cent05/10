package DuckBehaviour;

public class ModolDuck extends Duck {
    public ModolDuck() 
    {
        flyBehaviour = new FlyNoWay();
        quackBehaviour = new Quack();
    }
    public void display() 
    {
        System.out.println("I'm a model duck");
    }
}