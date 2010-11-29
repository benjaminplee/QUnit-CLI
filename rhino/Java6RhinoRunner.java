/************
 *
 * Java 6 Embedded Rhino Test Suite Runner
 * 
 * Java 6 comes with Rhino bundled with the JDK.  This example test runner will execute the suit.js test suite in the same directory.
 *
 ************/

import javax.script.*;
import java.io.*;

public class Java6RhinoRunner {
    public static void main(String[] args) throws ScriptException {
	new Java6RhinoRunner().load(args[0]);
    }

    private final ScriptEngine engine;

    public Java6RhinoRunner() throws ScriptException {
	ScriptEngineManager factory = new ScriptEngineManager();
	this.engine = factory.getEngineByName("JavaScript");

	this.engine.put("Java6RhinoRunner", this);
	this.engine.eval("function load(filename) { Java6RhinoRunner.load(filename); }");
    }

    public void load(String filename) throws ScriptException {
	try {
	    this.engine.eval(new FileReader(filename));
	}
	catch(FileNotFoundException e) {
	    throw new RuntimeException("Error loading javascript file: " + filename, e);
	}
    }
}