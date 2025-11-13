// D2: FileCompressor
class FileCompressor {
   compress(fileName)  {
    console.log("file "+fileName+" started compressing");
    this.#readFile();
    this.#pack();
    this.#writeArchive();
    console.log("file compressed Successfully")
}

  // TODO: #readFile()
 #readFile()
 {
    console.log("reading file")
 }
#pack()
{
    console.log("packing file")
}
  // TODO: #pack()
#writeArchive()
{
    console.log("archiving file")
}
  // TODO: #writeArchive()
}

// TODO: demo: compress("report.pdf")

let fc =new FileCompressor()
fc.compress("Index");