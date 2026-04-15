const DATA = [
  {
    section: "Section 9.11",
    title: "Section 9.11 — ArrayList",
    questions: [
      { q: "itemList().size returns 8.", choices: ["True","False"], answer: 1, code: "ArrayList<Integer> itemList = new ArrayList<Integer>();\nitemList.add(0); itemList.add(0); itemList.add(0); itemList.add(0);\nitemList.add(99); itemList.add(98); itemList.add(97); itemList.add(96);" },
      { q: "itemList.size(8) returns 8.", choices: ["True","False"], answer: 1, code: "" },
      { q: "itemList.size() returns 8.", choices: ["True","False"], answer: 0, code: "" },
      { q: "itemList.get(8) returns 96.", choices: ["True","False"], answer: 1, code: "" },
      { q: "itemList.isEmpty() removes all elements.", choices: ["True","False"], answer: 1, code: "" },
      { q: "After itemList.clear(), itemList.get(0) is an invalid access.", choices: ["True","False"], answer: 0, code: "" },
      { q: "itemList.get(1) returns 77.", choices: ["True","False"], answer: 0, code: "ArrayList<Integer> itemList = new ArrayList<Integer>();\nitemList.add(33); itemList.add(77); itemList.add(44);" },
      { q: "itemList.add(1, 55) changes itemList to: 33 55 77 44.", choices: ["True","False"], answer: 0, code: "" },
      { q: "itemList.add(0, 99) inserts 99 at the front of the list.", choices: ["True","False"], answer: 0, code: "" },
      { q: "Assuming itemList is 99 33 55 77 44, then itemList.remove(55) results in: 99 33 77 44", choices: ["True","False"], answer: 1, code: "" },
      { q: "To maintain a list in ascending sorted order, a given new item should be inserted at the position of the first element that is greater than the item.", choices: ["True","False"], answer: 0, code: "" },
      { q: "To maintain a list in descending sorted order, a given new item should be inserted at the position of the first element that is equal to the item.", choices: ["True","False"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 12.2",
    title: "Section 12.2",
    questions: []
  },
  {
    section: "Section 15.1",
    title: "Section 15.1 — Output and Input Streams",
    questions: [
      { q: "Characters written to System.out are immediately written to a system's standard output.", choices: ["True","False"], answer: 1, code: "" },
      { q: "To use System.out, a program must include the statement import java.io.PrintStream;", choices: ["True","False"], answer: 1, code: "import java.io.PrintStream;" },
      { q: "Various standard data types are converted to a character sequence by print() and println().", choices: ["True","False"], answer: 0, code: "" },
      { q: "System.in is a predefined InputStream associated with the system's standard input.", choices: ["True","False"], answer: 0, code: "" },
      { q: "A program must import the InputStream class in order to use System.in.", choices: ["True","False"], answer: 1, code: "" },
      { q: "A read from System.in will read bytes from a buffer filled by the operating system.", choices: ["True","False"], answer: 0, code: "" },
      { q: "The throws clause for using an InputStream is throws InputException.", choices: ["True","False"], answer: 1, code: "throws InputException" },
      { q: "What class has methods to extract strings, integers, and other types from an InputStream?", choices: ["Scanner","System.in","IOException"], answer: 0, code: "" },
      { q: "What is passed to the Scanner's constructor to initialize a Scanner object?", choices: ["System.in","An InputStream","nextInt()"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 15.2",
    title: "Section 15.2 — printf()",
    questions: [
      { q: "What is output to the screen?\nSystem.out.printf(\"%d - %s\", age, name);  // where age=20, name=\"Alice\"", choices: ["%d - %s","age - name","20 - Alice"], answer: 2, code: "String name = \"Alice\";\ndouble gpa = 3.5;\nint age = 20;" },
      { q: "What outputs \"3.500000% 20\"?", choices: ["System.out.printf(\"%f% %d\\n\", gpa, age);","System.out.printf(\"%f%% %d\\n\", gpa, age);","System.out.printf(\"%d%% %f\\n\", gpa, age);"], answer: 1, code: "" },
      { q: "What outputs \"20, 21\"?", choices: ["System.out.printf(\"%d, %d\\n\", age, age + 1);","System.out.printf(\"%d, %d\\n\", age);","System.out.printf(\"%d, %d\\n\", age, age);"], answer: 0, code: "" },
      { q: "Does Line A immediately write to standard output?\n// Poem by Henry David Thoreau\nSystem.out.print(\"My life has been the poem \"); // A\nSystem.out.println(\"I would have writ\"); // B\nSystem.out.print(\"But I could not \"); // C\nSystem.out.flush();\nSystem.out.print(\"both live and utter it.\\n\"); // D", choices: ["True","False"], answer: 1, code: "// A: System.out.print(\"My life has been the poem \");" },
      { q: "Does Line B immediately write to standard output?", choices: ["True","False"], answer: 0, code: "// B: System.out.println(\"I would have writ\");" },
      { q: "Does Line C immediately write to standard output?", choices: ["True","False"], answer: 1, code: "// C: System.out.print(\"But I could not \");" },
      { q: "Does Line D immediately write to standard output?", choices: ["True","False"], answer: 0, code: "// D: System.out.print(\"both live and utter it.\\n\");" },
    ]
  },
  {
    section: "Section 15.4",
    title: "Section 15.4 — File Input (Scanner)",
    questions: [
      { q: "What is the error in the following code?", choices: ["The file stream is not big enough.","The file stream has not been properly opened.","The nextInt() method cannot be used here.","The code is fine."], answer: 1, code: "FileInputStream fbStream;\nScanner inFS;\nint[] num;\nint numElem = 0;\nint i = 0;\ninFS = new Scanner(fbStream);\nnumElem = inFS.nextInt();\nnum = new int[numElem];" },
      { q: "Which statement opens a file inputfile.txt given FileInputStream fbs = null;", choices: ["fbs.FileInputStream(\"inputfile.txt\");","fbs(\"inputfile.txt\");","fbs = new FileInputStream(\"inputfile.txt\");"], answer: 2, code: "FileInputStream fbs = null;" },
      { q: "Which statement determines if the next token in a file is an integer available to be read?", choices: ["fileNum = inFS.nextInt();","if (inFS.hasNextInt())"], answer: 1, code: "" },
      { q: "Given a file with 7 tokens (words/numbers), how many times does the while(inFS.hasNext()) loop iterate?", choices: ["3","4","7"], answer: 2, code: "// File contents:\n// twenty\n// associable\n// twenty\n// unredacted\n// associable\n// folksay\n// twenty" },
      { q: "What indicates that the end of the input file stream has been reached?", choices: ["The hasNext() method returning false","The hasNext() method returning true"], answer: 0, code: "" },
      { q: "If the user entered \"associable\" as the userWord, how many times would the while loop execute?\n(File contains 7 words; \"associable\" appears twice)", choices: ["2","7"], answer: 1, code: "" },
      { q: "Which statement reads a full line of multiple strings from an input file?", choices: ["lineString = inFS.next();","lineString = inFS.nextLine();"], answer: 1, code: "" },
      { q: "What variables are declared to track the average rating in the restaurant review system?", choices: ["A single double","Two integers","Two integers and a double"], answer: 2, code: "// Tracks userRatingSum, userRatingCount (ints), and computes double average" },
    ]
  },
  {
    section: "Section 15.5",
    title: "Section 15.5 — File Output (PrintWriter)",
    questions: [
      { q: "The FileOutputStream constructor takes _____.", choices: ["0 arguments","a String for a file name as an argument","a PrintWriter as an argument"], answer: 1, code: "" },
      { q: "Which correctly initializes outFS to enable writing to outfile.txt using PrintWriter's methods?", choices: ["outFS = new PrintWriter(outputStream);","outFS = PrintWriter(outputStream);","outFS = new FileOutputStream(outputStream);"], answer: 0, code: "FileOutputStream outputStream = new FileOutputStream(\"outfile.txt\");\nPrintWriter outFS = null;" },
      { q: "The PrintWriter _____.", choices: ["is required to write to a FileOutputStream","opens a second file for writing","is used to allow data types other than byte arrays to be easily written to the file"], answer: 2, code: "" },
      { q: "An exception is thrown if \"myoutfile.txt\" cannot be opened.", choices: ["True","False"], answer: 0, code: "" },
      { q: "Since no data is written, the code below never creates the myoutfile.txt file on disk.\nfileStream = new FileOutputStream(\"myoutfile.txt\");\nfileStream.close();", choices: ["True","False"], answer: 1, code: "fileStream = new FileOutputStream(\"myoutfile.txt\");\nfileStream.close();" },
      { q: "A FileOutputStream should be closed using the close() method.", choices: ["True","False"], answer: 0, code: "" },
      { q: "The PrintWriter constructor _____.", choices: ["has a parameter of type OutputStream","has no parameters"], answer: 0, code: "" },
      { q: "A PrintWriter can be created from either fileStream or System.out because _____.", choices: ["both are instances of FileOutputStream","both are instances of a class that inherits from OutputStream","both are instances of PrintWriter"], answer: 1, code: "" },
      { q: "println() is a method of _____.", choices: ["the OutputStream class","the PrintWriter class","both the OutputStream and PrintWriter classes"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 16.1",
    title: "Section 16.1 — Exception Basics",
    questions: [
      { q: "Which input causes an exception for this code?\nnum1 = scnr.nextInt(); num2 = scnr.nextInt();", choices: ["12 34 two","43 -7","17 two 3"], answer: 2, code: "int num1 = 0, num2 = 0;\nnum1 = scnr.nextInt();\nnum2 = scnr.nextInt();" },
      { q: "Which input causes an exception when reading two integers?\nnum1 = scnr.nextInt(); num2 = scnr.nextInt();", choices: ["5 13","35 45.1","12    34"], answer: 1, code: "" },
      { q: "Which input causes an exception when reading a double?\ndistMiles = scnr.nextDouble();", choices: ["+5 0","1,0 23","1,000 23000"], answer: 1, code: "distMiles = scnr.nextDouble();" },
    ]
  },
  {
    section: "Section 16.2",
    title: "Section 16.2 — Throwing and Catching Exceptions",
    questions: [
      { q: "Which statement throws an Exception object with the message \"Invalid ID\"?", choices: ["throw Exception(\"Invalid ID\");","throw new Exception();","throw new Exception(\"Invalid ID\");"], answer: 2, code: "" },
      { q: "Which statement outputs only the message of an exception object named excpt?", choices: ["System.out.println(excpt.toString());","System.out.println(excpt.getMessage());","System.out.println(excpt);"], answer: 1, code: "" },
      { q: "Which catch block catches the exception thrown by:\nthrow new Exception(\"0.0 / 0.0 is not a number\");", choices: ["catch ( Exception excpt ) { // ... }","catch ( InputMismatchException excpt ) { // ... }","catch ( ArithmeticException excpt ) { // ... }"], answer: 0, code: "throw new Exception(\"0.0 / 0.0 is not a number\");" },
      { q: "In the CircleRadiusCalculator program, what is output when the input is the word \"pi\"?", choices: ["Invalid input.","Invalid area.","Invalid area. Invalid input.","1.0"], answer: 0, code: "" },
      { q: "Which handler arrangement catches exceptions of type Exception and InputMismatchException?", choices: ["catch ( InputMismatchException excpt1, Exception excpt2 ) { // ... }","catch ( InputMismatchException ) { // ... } catch ( Exception ) { // ... }","catch ( Exception excpt ) { // ... }"], answer: 2, code: "" },
      { q: "Which handler arrangement can catch exceptions of type Exception and InputMismatchException in SEPARATE catch blocks?", choices: ["catch ( Exception excpt ) { // ... } catch ( InputMismatchException excpt ) { // ... }","catch ( InputMismatchException excpt ) { // ... } catch ( Exception excpt ) { // ... }","catch ( Exception excpt ) { // ... } catch ( Exception excpt ) { // ... }"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 16.3",
    title: "Section 16.3 — Exceptions with Files",
    questions: [
      { q: "Which statement correctly opens file1.txt for reading? (File and program are in same directory.)", choices: ["fileInStream = new FileInputStream ( \"my-files/file1.txt\" );","fileInStream = new FileInputStream ( \"file1.txt\" );","fileInStream = new FileInputStream ( \"fiel1.txt\" );"], answer: 1, code: "" },
      { q: "Which of the following would NOT throw a FileNotFoundException?", choices: ["Opening a read-only file for writing.","Specifying the wrong file path.","Reading invalid data from a file."], answer: 2, code: "" },
      { q: "Which try/catch block correctly catches a potential FileNotFoundException when opening an input file?", choices: ["fileStream = new FileInputStream ( fileName ); try { fileScnr = new Scanner ( fileStream ); } catch ( FileNotFoundException e ) { }","try { fileScnr = new Scanner ( new FileInputStream ( fileName )); } catch ( FileNotFoundException e ) { }","fileStream = new FileInputStream ( fileName ); fileScnr = new Scanner ( fileStream ); try { double numVal = fileScnr.nextDouble(); } catch ( FileNotFoundException e ) { }"], answer: 1, code: "" },
      { q: "The input file is not found. Which file(s) are left open?", choices: ["Only input.txt","Only output.txt","Both files are left open","No file is left open"], answer: 3, code: "// Code WITHOUT try-with-resources:\n// fileInStream = new FileInputStream(\"input.txt\");\n// fileWriter = new PrintWriter(new FileOutputStream(\"output.txt\"));\n// catch(FileNotFoundException) only — no finally" },
      { q: "The input file is found, but the output file cannot be opened. Which file(s) are left open?", choices: ["Only input.txt","Only output.txt","Both files are left open","No file is left open"], answer: 0, code: "" },
      { q: "Both input and output files are opened, but an InputMismatchException is thrown while reading. Which file(s) are left open?", choices: ["Only input.txt","Only output.txt","Both files are left open","No file is left open"], answer: 2, code: "" },
      { q: "Which try/catch blocks do NOT properly close the file input.txt?", choices: ["try ( Scanner scnr = new Scanner ( new FileInputStream ( fName ))) { } catch ( FileNotFoundException e ) { }","try ( FileInputStream inStrm = new FileInputStream ( fName ); Scanner scnr = new Scanner ( inStrm )) { } catch ( FileNotFoundException e ) { } catch ( IOException e ) { }","try ( Scanner scnr = new Scanner ( inStrm ); FileInputStream inStrm = new FileInputStream ( fName )) { } catch ( FileNotFoundException e ) { }"], answer: 2, code: "" },
      { q: "Which try/catch blocks properly close the file input.txt?", choices: ["try ( FileInputStream inStrm = new FileInputStream ( fName )) { Scanner scnr = new Scanner ( inStrm ); } catch ( FileNotFoundException e ) { } catch ( IOException e ) { }","try ( Scanner scnr = new Scanner ( inStrm )) { FileInputStream inStrm = new FileInputStream ( fName ); } catch ( FileNotFoundException e ) { } catch ( IOException e ) { }","FileInputStream inStrm = new FileInputStream ( fName ); try ( Scanner scnr = new Scanner ( inStrm )) { } catch ( FileNotFoundException e ) { } catch ( IOException e ) { }"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 16.5",
    title: "Section 16.5 — Exception Handling Pitfalls",
    questions: [
      { q: "Which input sequence causes an unintended exception type to be caught?", choices: ["-1.0 10.0","0.0 0.0","20 twenty"], answer: 2, code: "" },
      { q: "Which scenario causes an unintended exception type to be caught in getDensity()?", choices: ["The scnr parameter in getDensity() is null.","The input sequence 0.0 10.0","The input sequence 10.0 0.0"], answer: 0, code: "" },
      { q: "Does the following catch block arrangement handle the NaN exception separately from other exception types?\ncatch ( Exception e ) { }\ncatch ( InputMismatchException e ) { }\ncatch ( NullPointerException e ) { }", choices: ["Yes","No"], answer: 1, code: "catch ( Exception e ) { }\ncatch ( InputMismatchException e ) { }\ncatch ( NullPointerException e ) { }" },
      { q: "Does the following catch block arrangement handle the NaN exception separately from other exception types?\ncatch ( InputMismatchException e ) { }\ncatch ( Exception e ) { }", choices: ["Yes","No"], answer: 1, code: "catch ( InputMismatchException e ) { }\ncatch ( Exception e ) { }" },
    ]
  },
  {
    section: "Section 17.1",
    title: "Section 17.1 — Recursion Introduction",
    questions: [
      { q: "Is the following algorithm recursive?\n\"Helping N people:\nIf N is 1, help that person.\nElse, help the first N/2 people, then help the second N/2 people.\"", choices: ["True","False"], answer: 0, code: "" },
      { q: "Is the following algorithm recursive?\n\"Driving to the store:\nGo 1 mile.\nTurn left on Main Street.\nGo 1/2 mile.\"", choices: ["True","False"], answer: 1, code: "" },
      { q: "Is the following algorithm recursive?\n\"Sorting envelopes by zipcode:\nIf N is 1, done.\nElse, find the middle zipcode. Put all less on the left, greater on the right. Then sort the left, then sort the right.\"", choices: ["True","False"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 17.3",
    title: "Section 17.3 — Binary Search (Recursive)",
    questions: [
      { q: "To search for item C, the first call is findMatch(0, 4). What is the second call to findMatch()?", choices: ["findMatch(0, 0)","findMatch(0, 2)","findMatch(3, 4)"], answer: 1, code: "// Array has 5 items at indices 0-4\n// midVal = (0+4)/2 = 2\n// C is before midpoint, so search lower half" },
      { q: "In searching for item C, findMatch(0, 2) is called. What happens next?", choices: ["Base case 1: item found at midVal.","Base case 2: rangeSize == 1, so no match.","Recursive call: findMatch(2, 2)"], answer: 2, code: "// midVal = (0+2)/2 = 1\n// item at index 1 is not C\n// C is after index 1, so recurse on upper half" },
    ]
  },
  {
    section: "Section 17.4",
    title: "Section 17.4 — Recursive Debugging",
    questions: [
      { q: "The debug approach described requires an extra parameter to be passed to indicate the amount of indentation.", choices: ["True","False"], answer: 0, code: "" },
      { q: "Each recursive call should add a few spaces to the indent parameter.", choices: ["True","False"], answer: 0, code: "" },
      { q: "The method should remove a few spaces from the indent parameter before returning.", choices: ["True","False"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 17.5",
    title: "Section 17.5 — Recursive Algorithm Design",
    questions: [
      { q: "Recursive methods can be accomplished in one step, namely repeated calls to itself.", choices: ["True","False"], answer: 1, code: "" },
      { q: "A recursive method with parameter N counts up from any negative number to 0. An appropriate base case would be N == 0.", choices: ["True","False"], answer: 0, code: "" },
      { q: "A recursive method can have two base cases, such as N == 0 returning 0, and N == 1 returning 1.", choices: ["True","False"], answer: 0, code: "" },
      { q: "N factorial (N!) is commonly implemented as a recursive method due to being easier to understand and executing faster than a loop implementation.", choices: ["True","False"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 17.6",
    title: "Section 17.6 — GCD (Recursive)",
    questions: [
      { q: "How many calls are made to gcdCalculator() for input values 12 and 8?\n(GCD(12,8): 12%8=4 → GCD(8,4): 8%4=0 → base case)", choices: ["1","2","3"], answer: 2, code: "// GCD(12, 8) -> GCD(8, 4) -> GCD(4, 0) = base case\n// Total: 3 calls" },
      { q: "What is the base case for the GCD algorithm?", choices: ["When both inputs to the method are equal.","When both inputs are greater than 1.","When inNum1 > inNum2."], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 17.7",
    title: "Section 17.7 — Permutations (Recursive)",
    questions: [
      { q: "What is the output of scrambleLetters(\"xy\", \"\")?\n(Trace the recursion manually)", choices: ["yx xy","xx yy xy yx","xy yx"], answer: 2, code: "// i=0: remainLetters=\"y\", scramLetters=\"x\"\n//   -> prints \"xy\"\n// i=1: remainLetters=\"x\", scramLetters=\"y\"\n//   -> prints \"yx\"" },
      { q: "When main() calls shoppingBagPermutations(), how many items are in the remainingItems list?\n(possibleItems: Milk, Belt, Toys, Cups — 4 items)", choices: ["None","3","4"], answer: 2, code: "// possibleItems = [Milk, Belt, Toys, Cups]\n// MAX_SHOPPING_BAG_SIZE = 3" },
      { q: "When main() calls shoppingBagPermutations(), how many items are in the currBag list?", choices: ["None","1","4"], answer: 0, code: "" },
      { q: "After main() calls shoppingBagPermutations(), what happens first?", choices: ["The base case prints Milk, Belt, Toys.","The method bags one item, makes recursive call.","The method bags 3 items, makes recursive call."], answer: 1, code: "" },
      { q: "Just before shoppingBagPermutations() returns back to main(), how many items are in the remainingItems list?\n(Items are restored after each recursive call)", choices: ["None","4"], answer: 1, code: "" },
      { q: "How many recursive calls occur before the first permutation is printed?\n(Need 3 items in bag before base case triggers)", choices: ["None","1","3"], answer: 2, code: "" },
      { q: "What happens if main() only put 2, rather than 4, items in the possibleItems list?\n(MAX_SHOPPING_BAG_SIZE = 3)", choices: ["Base case never executes; nothing printed.","Infinite recursion occurs."], answer: 0, code: "" },
      { q: "You wish to generate all possible 3-letter subsets from the letters in an N-letter word (N>3). Which recursive method is the closest?", choices: ["shoppingBagPermutations","scrambleLetters","main()"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 17.8",
    title: "Section 17.8 — Stack Overflow",
    questions: [
      { q: "A memory's stack region can store at most one stack frame.", choices: ["True","False"], answer: 1, code: "" },
      { q: "The size of the stack is unlimited.", choices: ["True","False"], answer: 1, code: "" },
      { q: "A stack overflow occurs when the stack frame for a method call extends past the end of the stack's memory.", choices: ["True","False"], answer: 0, code: "" },
      { q: "The following recursive method will result in a stack overflow.", choices: ["True","False"], answer: 0, code: "int recAdder(int inValue) {\n    return recAdder(inValue + 1);\n}" },
    ]
  },
  {
    section: "Section 19.1",
    title: "Section 19.1",
    questions: []
  },
  {
    section: "Section 19.2",
    title: "Section 19.2",
    questions: []
  },
  {
    section: "Section 34.1",
    title: "Section 34.1",
    questions: []
  },
  {
    section: "Section 34.2",
    title: "Section 34.2",
    questions: []
  },
  {
    section: "Section 34.3",
    title: "Section 34.3 — Binary Search",
    questions: [
      { q: "The array (12, 75, 18, 22, 94, 16, 22) can be used as input to the binarySearch() method.", choices: ["True","False"], answer: 1, code: "// Binary search requires a SORTED array.\n// (12, 75, 18, 22, 94, 16, 22) is NOT sorted." },
    ]
  },
  {
    section: "Section 37.1",
    title: "Section 37.1 — Stack Concept",
    questions: [
      { q: "Which sequence of operations produces numStack with 41 at the top?\n(Stack shown top-first: 41, 39, 88, 56)", choices: ["1) Push 41  2) Push 39  3) Push 88  4) Push 56","1) Push 56  2) Push 88  3) Push 39  4) Push 41"], answer: 1, code: "" },
      { q: "Popping from numStack (top = 41) _____.", choices: ["returns 41","returns 56","causes an error"], answer: 0, code: "" },
      { q: "If four pop-and-print operations occur on numStack [top: 41, 39, 88, 56], what is printed?", choices: ["41, 39, 88, 56","56, 88, 39, 41","41, 41, 41, 41"], answer: 0, code: "" },
      { q: "Given inventoryStack: 70, 888, -3, 2\nGetLength(inventoryStack) returns _____.", choices: ["4","70"], answer: 0, code: "" },
      { q: "Given callStack: 2, 9, 4 (2 = top)\nWhat are the contents after Peek(callStack)?", choices: ["2, 9, 4","9, 4"], answer: 0, code: "" },
      { q: "Given callStack: 2, 9, 4 (2 = top)\nWhat are the contents after Pop(callStack)?", choices: ["2, 9, 4","9, 4"], answer: 1, code: "" },
      { q: "IsEmpty(integerStack) returns _____ if integerStack contains no items.", choices: ["true","false"], answer: 0, code: "" },
      { q: "Which operation should usually be preceded by a check that the stack is not empty?", choices: ["Pop","Push"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 37.2",
    title: "Section 37.2 — Linked-List Stack",
    questions: [
      { q: "After: Push(45), Push(56), Push(11), Pop()\nThe stack has three items.", choices: ["True","False"], answer: 1, code: "StackPush(stack, 45)\nStackPush(stack, 56)\nStackPush(stack, 11)\npoppedValue = StackPop(stack)  // removes 11" },
      { q: "After the same operations, a pop operation would return 56.", choices: ["True","False"], answer: 0, code: "// Stack after operations: [45 (bottom), 56 (top)]" },
      { q: "Instead of a \"top\" pointer, numStack could have a \"bottom\" pointer that points to the last node.", choices: ["True","False"], answer: 1, code: "" },
      { q: "A push operation changes the _____.", choices: ["stack's top node pointer","data value of the stack's top node","next pointer of the stack's top node"], answer: 0, code: "StackPush(stack, item) {\n  newNode = Allocate new node\n  newNode.data = item\n  newNode.next = stack.top\n  stack.top = newNode   // <-- top pointer changes\n}" },
      { q: "Is numStack a valid linked-list-based stack? (Nodes: 54 → 8 → null, top points to 54)", choices: ["Yes, and the top item is 54","Yes, and the top item is 8","No, a stack must be represented vertically"], answer: 0, code: "" },
      { q: "StackPop() returns the stack's top node.", choices: ["True","False"], answer: 1, code: "StackPop(stack) {\n  poppedItem = stack.top.data  // returns DATA, not node\n  stack.top = stack.top.next\n  return poppedItem\n}" },
    ]
  },
  {
    section: "Section 37.3",
    title: "Section 37.3 — Array-Based Stack",
    questions: [
      { q: "In an unbounded array-based stack, when the array is reallocated, the length _____.", choices: ["increases by 1","doubles","decreases by 1"], answer: 1, code: "" },
      { q: "When does a push operation resize the stack's array?", choices: ["When length == array.length","When length == array.length - 1","Every push operation resizes the stack's array"], answer: 0, code: "" },
      { q: "In theory, an unbounded stack can grow in length indefinitely. In reality, the stack can _____.", choices: ["also grow in length indefinitely","grow only until all distinct 32-bit integer values are pushed","grow only until the resize operation fails to allocate memory"], answer: 2, code: "" },
      { q: "A bounded stack's maximum length and initial array length are always equal.", choices: ["True","False"], answer: 1, code: "" },
      { q: "A bounded stack implementation may throw an exception if a push operation occurs when full.", choices: ["True","False"], answer: 0, code: "" },
      { q: "Array-based stack implementations commonly reallocate when popping.", choices: ["True","False"], answer: 1, code: "" },
      { q: "Which implementation(s) may need to reallocate the array to push an item?\n(A = unbounded, B = bounded)", choices: ["Implementation A only","Implementation B only","Both A and B","Neither A nor B"], answer: 0, code: "" },
      { q: "Which implementation(s) may allow a push when length == maxLength?\n(A = unbounded with maxLength=-1, B = bounded)", choices: ["Implementation A only","Implementation B only","Neither A nor B"], answer: 2, code: "" },
      { q: "Which implementation(s) guarantee that both push and pop execute in worst-case O(1) time?", choices: ["Implementation A only","Implementation B only","Both A and B","Neither A nor B"], answer: 1, code: "" },
      { q: "The ArrayStack class implements _____.", choices: ["a bounded stack only","an unbounded stack only","both a bounded and unbounded stack"], answer: 2, code: "" },
      { q: "Can the ArrayStack constructor be called without an argument?", choices: ["Yes. Doing so makes the stack bounded.","Yes. Doing so makes the stack unbounded.","No."], answer: 1, code: "" },
      { q: "The pop() method is implemented in two lines, but can also be implemented in one:", choices: ["return array[-- length];","return array[length --];","return array[length - 1];"], answer: 0, code: "// Two-line version:\n// T toReturn = array[length - 1];\n// length--;\n// return toReturn;" },
      { q: "The pop() method requires the stack length to be ≥ 1.", choices: ["True","False"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 37.4",
    title: "Section 37.4 — Queue Concept",
    questions: [
      { q: "Given rosterQueue: 400, 313, 270, 514, 119\nGetLength(rosterQueue) returns _____.", choices: ["400","5"], answer: 1, code: "" },
      { q: "Which operation determines if the queue contains no items?", choices: ["IsEmpty()","Peek()"], answer: 0, code: "" },
      { q: "Given parkingQueue: 1, 8, 3\nWhat are the queue contents after Peek(parkingQueue)?", choices: ["1, 8, 3","8, 3"], answer: 0, code: "" },
      { q: "Given parkingQueue: 2, 9, 4\nWhat are the queue contents after Dequeue(parkingQueue)?\n(Dequeue removes front item)", choices: ["9, 4","2, 9, 4"], answer: 0, code: "" },
      { q: "Given that parkingQueue has no items (is empty), what does GetLength(parkingQueue) return?", choices: ["-1","0","Undefined"], answer: 1, code: "" },
    ]
  },
  {
    section: "Section 37.5",
    title: "Section 37.5 — Linked-List Queue",
    questions: [
      { q: "The queue is empty when the front pointer is _____.", choices: ["null","not null"], answer: 0, code: "" },
      { q: "In the QueueDequeue() operation, dequeuedItem is assigned with the list _____ node's data.", choices: ["front","end"], answer: 0, code: "" },
      { q: "For QueueEnqueue(numQueue, 22), which pointer is updated to point to newNode?", choices: ["numQueue's front pointer","The front node's next pointer","The end node's next pointer"], answer: 2, code: "" },
    ]
  },
  {
    section: "Section 37.6",
    title: "Section 37.6 — Array-Based Queue",
    questions: [
      { q: "What is the queue's front item if frontIndex is 3 and length is 2?\n(Array: [67, 44, 38, _] indexed 0-3)", choices: ["67","44","38"], answer: 2, code: "// front item = array[frontIndex] = array[3]\n// Array contents: index 0=67, 1=19, 2=44, 3=38" },
      { q: "What is the queue's back item if frontIndex is 0 and length is 3?\n(Array: [67, 19, 44, 38] indexed 0-3)", choices: ["67","44","38"], answer: 1, code: "// back item = array[(frontIndex + length - 1) % array.length]\n// = array[(0 + 3 - 1) % 4] = array[2] = 44" },
      { q: "What is the queue's content if length is 4 and frontIndex is 1?\n(Array: [67, 19, 44, 38] indexed 0-3)", choices: ["(front) 67, 19, 44, 38 (back)","(front) 19, 44, 38 (back)","(front) 19, 44, 38, 67 (back)"], answer: 2, code: "// Items: array[1]=19, array[2]=44, array[3]=38, array[0]=67 (wraps)\n// Queue content (front to back): 19, 44, 38, 67" },
      { q: "_____ can be full.", choices: ["Only a bounded queue","Only an unbounded queue","Both bounded and unbounded queues"], answer: 0, code: "" },
      { q: "A bounded queue implementation may throw an exception if an enqueue operation occurs when full.", choices: ["True","False"], answer: 0, code: "" },
      { q: "The maxLength variable is needed _____.", choices: ["only for the bounded queue implementation","only for the unbounded queue implementation","for both the bounded and unbounded queue implementations"], answer: 0, code: "" },
      { q: "queueA (array: [73,91,87,62], frontIndex: 2, length: 4, maxLength: -1) is _____.", choices: ["bounded and full","bounded and not full","unbounded"], answer: 2, code: "// maxLength = -1 means unbounded\n// length == array.length means array is full but can resize" },
      { q: "After executing queueA.resize(), queueA's allocation size is _____.\n(array: [73,91,87,62], frontIndex: 2, length: 4, maxLength: -1)", choices: ["-1","4","8"], answer: 2, code: "// newSize = array.length * 2 = 4 * 2 = 8\n// maxLength = -1 (no cap)" },
      { q: "After executing queueA.resize(), queueA's first four array elements are _____.\n(array: [73,91,87,62], frontIndex: 2)", choices: ["73, 91, 87, 62","87, 62, 73, 91"], answer: 1, code: "// Copies from frontIndex=2:\n// i=0: (2+0)%4=2 -> 87\n// i=1: (2+1)%4=3 -> 62\n// i=2: (2+2)%4=0 -> 73\n// i=3: (2+3)%4=1 -> 91\n// Result: [87, 62, 73, 91]" },
      { q: "Can one of queueA's initial variables be changed such that executing queueA.resize() makes queueA's allocation size 6?", choices: ["Yes, if maxLength were initially 6","Yes, if array.length were initially 6","No"], answer: 0, code: "// newSize = 4*2 = 8\n// if maxLength=6: newSize = min(8, 6) = 6 ✓" },
      { q: "_____ may resize the queue.", choices: ["Only the enqueue operation","Only the dequeue operation","Both the enqueue and dequeue operations"], answer: 0, code: "" },
      { q: "(frontIndex + length) % array.length yields the index _____.", choices: ["of the item to remove during a dequeue operation","at which to insert a new item during an enqueue operation","of the queue's back item"], answer: 1, code: "" },
      { q: "enqueue() returns false if _____.", choices: ["the item is successfully enqueued","the resize operation fails","the queue is full"], answer: 2, code: "boolean enqueue(int item) {\n  if (length == maxLength) { return false; }  // bounded & full\n  if (length == array.length) { resize(); }\n  // ...\n  return true;\n}" },
      { q: "The enqueue operation's worst-case runtime complexity is _____.", choices: ["O(1)","O(log n)","O(n)"], answer: 2, code: "// Resize copies all n elements → O(n) worst case" },
      { q: "The dequeue operation's worst-case runtime complexity is _____.", choices: ["O(1)","O(log n)","O(n)"], answer: 0, code: "// Just adjusts frontIndex and decrements length → O(1)" },
      { q: "An alternate implementation could store the queue's back item index instead of the length.", choices: ["True","False"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 46.5",
    title: "Section 46.5 — Scanner Advanced",
    questions: [
      { q: "Select the output: Scanner counts ALL characters in \"A cup of Java.\" using useDelimiter(\"\").", choices: ["4","7","11","14"], answer: 3, code: "data.useDelimiter(\"\");\nint count = 0;\nwhile (data.hasNext()) {\n    String input = data.next();\n    count++;\n}\nSystem.out.println(count);\n// Input: \"A cup of Java.\"  (14 characters)" },
      { q: "Select the output: Scanner counts NON-LETTER characters in \"A cup of Java.\" using useDelimiter(\"\") and Character.isLetter().", choices: ["3","4","10","14"], answer: 1, code: "// Non-letters in \"A cup of Java.\": 3 spaces + 1 period = 4\ndata.useDelimiter(\"\");\nint count = 0;\nwhile (data.hasNext()) {\n    char input = data.next().charAt(0);\n    if (!Character.isLetter(input)) { count++; }\n}\nSystem.out.println(count);" },
      { q: "For input \"China  1330044605\", is this approach valid?\nFind the FIRST space at position i, then extract line.substring(0, i).trim() and line.substring(i + 1).", choices: ["Valid","Not valid"], answer: 1, code: "// Fails for multi-word names like \"United States 303824646\"\n// First space splits \"United\" from \"States 303824646\"" },
      { q: "For input lines like \"United States 303824646\", is this approach valid?\nFind the LAST space at position i, then extract line.substring(0, i).trim() and line.substring(i).", choices: ["Valid","Not valid"], answer: 1, code: "// line.substring(i) = \" 303824646\" — has leading space\n// Integer.parseInt(\" 303824646\") would fail without trim()" },
      { q: "For input lines like \"United States 303824646\", is this approach valid?\nFind the LAST space at position i, then extract line.substring(0, i).trim() and line.substring(i + 1).", choices: ["Valid","Not valid"], answer: 0, code: "// line.substring(i+1) = \"303824646\" ✓\n// line.substring(0, i).trim() = \"United States\" ✓" },
      { q: "For parsing country names and populations, is this approach valid?\nAppend results of in.next() (with space separators) while in.hasNextInt() is false. Then call in.nextInt() to read population.", choices: ["Valid","Not valid"], answer: 0, code: "// Reads words until encountering an integer → handles multi-word names\n// Works for: \"United States 303824646\"" },
      { q: "When the pending input starts with line \"2 United States\",\nin.nextInt() yields 2, and in.next() yields \"United\".", choices: ["True","False"], answer: 0, code: "// nextInt() reads 2, positions scanner after \"2\"\n// next() reads next token: \"United\" ✓" },
      { q: "When the pending input starts with line \"2 United States\",\nin.nextInt() yields 2, and in.nextLine() yields \"United States\".", choices: ["True","False"], answer: 1, code: "// After nextInt() reads \"2\", remaining on line: \" United States\"\n// nextLine() returns \" United States\" (with leading space), not \"United States\"" },
      { q: "When the pending input is:\n2\nUnited States\n(two separate lines)\nin.nextInt() yields 2, and in.nextLine() yields \"United States\".", choices: ["True","False"], answer: 1, code: "// nextInt() reads 2, buffer has \"\\n\"\n// nextLine() reads \"\" (empty — rest of line 1)\n// Need ANOTHER nextLine() to get \"United States\"" },
      { q: "You should never mix nextInt/nextDouble and nextLine in the same program.", choices: ["True","False"], answer: 1, code: "" },
      { q: "If you call nextInt/nextDouble to read the number on a line, and then want to read the next line as a string with nextLine, add another call to nextLine (to consume the newline).", choices: ["True","False"], answer: 0, code: "int value = in.nextInt();\nin.nextLine(); // consume the '\\n' left by nextInt\nString line = in.nextLine(); // now reads next line ✓" },
      { q: "You can avoid the nextInt/nextLine pitfall by reading all lines with nextLine, and then processing each line.", choices: ["True","False"], answer: 0, code: "" },
    ]
  },
  {
    section: "Section 46.8",
    title: "Section 46.8 — Command-Line Arguments",
    questions: [
      { q: "Assume a program is executed as shown:\njava MyClass -v8 -h data.txt output.txt\nWhat is the value of args.length?", choices: ["2","4","5","6"], answer: 1, code: "// args: [\"-v8\", \"-h\", \"data.txt\", \"output.txt\"]\n// args.length = 4" },
      { q: "Select the output produced, assuming the program is executed as:\njava Question -h datafile.txt results.txt", choices: ["datafile.txt results.txt","-h datafile.txt","Question -h","Execution would result in a run-time index-out-of-bounds error"], answer: 0, code: "public class Question {\n    public static void main(String[] args) {\n        System.out.println(args[1] + \" \" + args[2]);\n    }\n}\n// args[0]=\"-h\", args[1]=\"datafile.txt\", args[2]=\"results.txt\"" },
    ]
  },
];