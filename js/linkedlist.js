class node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    
    }
}


class Linkedlist{
    constructor ()
    {
        this.head= null;
    }

    addfirst(value)
    {
        const newNode = new node(value);
        newNode.next= this.head;
        this.head= newNode; 
    }
    addLast(value)
    {
        const newNode =  new node(value);
        if(!this.head)
        {
            this.head=newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next)
        { currentNode=currentNode.next;

        }
        currentNode.next = newNode;
    }

    size()
    {
        let count=0;
        let currentNode=this.head;
        while(currentNode)
        {   count++;
            currentNode=currentNode.next;
         
        }

        return count
    }

    addanypoint(index,value)
    { if(index<0 || index >this.size() )
        {
            return console.error("error");
            
        }
        const currentNode = new node(value);
        let newNode = this.head;
        if(index === 0)
        {
            newNode.next =this.head;
            this.head = newNode;
            return
        }
    
        for(let i = 0 ; i< index-1 ;i++)
        {
                currentNode=currentNode.next;
        }
        newNode.next= currentNode.next;
        currentNode.next=newNode;

    }

    RemoveFirst()
    {
        if(!this.head)
        {
            return;
        }

        this.head= this.head.next
    }

    RemoveLast()
    {
        if(!this.head)
        {
            return;
        }
         if (!this.head.next) {  // if only one node
            this.head = null;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next.next)
        {
            currentNode=currentNode.next;

        }
        currentNode.next=null;


    }
    Removeat(index)
    {
        if(!this.head)
        {return}
        if(index ===0)
        {
            this.head= this.head.next;
        }
        let currentNode = this.head;
        for(let i =0 ; i<index-1;i++)
        {
            currentNode=currentNode.next;
        }
        if(currentNode.next)
        {
            currentNode.next=currentNode.next.next;
        }
    }

    Print()
    {
        let currentNode = this.head;
        while(currentNode)
        {
            console.log(currentNode.value)
            currentNode=currentNode.next;
            
        }
    }
}

const linkedListImple = new Linkedlist();

linkedListImple.addfirst(10);
linkedListImple.addfirst(7);
linkedListImple.addfirst(1);
linkedListImple.addLast(44)
linkedListImple.RemoveFirst();
linkedListImple.Removeat(2)
linkedListImple.addLast(44)
linkedListImple.Print();