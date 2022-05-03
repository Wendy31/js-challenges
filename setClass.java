class Main {
    public static void main(String[] args) {
      // Create a new instance of the Set
          Set set = new Set();
          System.out.println(set);
  
          // Add 1 to the set
        set.add(1);
        System.out.println(set);

  
          // Add 2 to the set
          set.add(2);
  
          // Add a duplicate element to the set
          set.add(2);
  
          // Check the set contains 1
          set.contains(1);
  
          // Check the set does not contain 3
          set.contains(3);
  
          // Delete an element from the set
          set.delete(1);
  
          // The set should no longer contain 1
          set.contains(1);
    }
  }
  
  class Set {
  
      public String toString() {
          return "I am a Set";
      }
  
      public void add(int element) {
  
      }
  
      public void contains(int element) {
  
      }
  
      public void delete(int element) {
  
      }
  }