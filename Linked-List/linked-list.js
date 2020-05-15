function LinkedList () {
    var length = 0;
    var head = null;

    var node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function() {
        return length;
    }

    this.head = function() {
        return head;
    }

    this.add = function(element) {
        var node = new Node(element);

        if(head === null){
            head = node;
        }else {
            var currentNode = head;
            
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;

        }

        length++;
    };

    this.remove = function(element){
        var currentNode = head;
        var perviousNode;
        if(currentNode.element === element){
            head = current.next;
        }else {
            while(currentNode.element !== element) {
                perviousNode = currentNode;
                currentNode = currentNode.next
            }
            perviousNode.next = currentNode.next
        }

        length --;
    }

    this.isEmpty = function(){
        return length === 0;
    };

    this.indexOf = function (element) {
        var currentNode = head;
        var index = -1;

        while (currentNode) {
            index++;
            if(currentNode.element === element) {
                return index;
            }
            currentNode = current.next;
        }

        return -1;
    }

     this.elementAT = function(index) {
         var currentNode = head;
         var count = 0;
         while (count < index){
             count++;
             currentNode = currentNode.next
         }
         return currentNode.element
     }

     this.addAT = function(index, element) {
         var node = new Node(element);

         var currentNode = head;
         var previousNode;
         var currentIndex =0;

         if(index > length){
             return false;
         }

         if (index === 0) {
             node.next = currentNode;
             head = node;
         } else {
             while (currentIndex < index) {
                 currentIndex ++;
                 previousNode = currentNode;
                 currentNode = currentNode.next;
             }
             node.next = currentNode;
             previousNode.next = node;
         }

         length++; 
     }

     this.removeAT = function(index) {
         var currentNode = head;
         var previousNode;
         if (index < 0 || index >= length){
             return null;
         }
         if(index === 0){
             head = currentNode.next;
         }else {
             while(currentindex < index){
                 currentIndex ++;
                 previousNode = currentNode;
                 currentNode = currentNode.next;
             }
             previousNode.next = currentNode.next;
         }
         length --;
         return currentNode.element;
     }

}

var kitchen = new LinkedList();
kitchen.add('onion');
kitchen.add("ginger");
kitchen.add('peas');
kitchen.add("beans");
kitchen.add('garlic');
kitchen.add("chilly");

console.log(kitchen.size());
console.log(kitchen.removeAT(3));
console.log(kitchen.elementAt(3));
console.log(kitchen.indexOf('puppy'));
console.log(kitchen.size());