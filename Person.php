<?php

// Здоровье человека не может быть больше 100!
class Person
{
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function  __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }

    function sayHi($name)
    {
        return "Hi $name, I`m " . $this->name;
    }

    function setHp($hp)
    {
        if ($this->hp + $hp >= 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }
    function getHp()
    {
        return $this->hp;
    }
    function getAge()
    {
        return $this->age;
    }
    function getName()
    {
        return $this->name;
    }
    function getLastname()
    {
        return $this->lastname;
    }
    function getMother()
    {
        return $this->mother;
    }
    function getFather()
    {
        return $this->father;
    }
    function getInfo() {
        return " <h3>A few words about myself</h3><br>"."My name is ".$this->getName()."<br>"
        ."I am ".$this->getAge()."<br>"
        ."My lastname is: ".$this->getLastname()."<br>"
        ."My mother is ".$this->getMother()->getName().". She is ".$this->getMother()->getAge()."<br>"
        ."My father is ".$this->getFather()->getName().". He is ".$this->getFather()->getAge()."<br>"
        ."My grannies are ".$this->getFather()->getMother()->getName()
        . "and ".$this->getMother()->getMother()->getName()
        ." they are pretty old: ".$this->getFather()->getMother()->getAge()
        ." and ".$this->getMother()->getMother()->getAge() ."<br>"
        ."My ony gandfather is ".$this->getMother()->getFather()->getName()
        ." and he is ".$this->getMother()->getFather()->getAge()
    ;
    }
}
$igor = new Person("Igor", "Petrov", 78);
$marfa = new Person("Marfa", "Petrova", 74);
$petr = new Person("Petr", "Petrov", 79);
$galina = new Person("Galina", "Petrova", 77);
$alex = new Person("Alex", "Ivanov", 42,$galina,null);
$olga = new Person("Olga", "Ivanova", 42, $marfa, $igor);
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);

//echo $valera->getMother()->getFather()->getName();
echo $valera->getInfo();

// $medKit = 50;
// $alex->setHp(-30); // Упал
// echo $alex->getHp() . "<br>";
// $alex->setHp($medKit); //Нашел аптечку
// echo $alex->getHp();