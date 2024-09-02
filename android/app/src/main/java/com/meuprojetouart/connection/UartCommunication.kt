// import java.io.InputStream
// import java.io.OutputStream

// class UartCommunication(private val serialPort: SerialPort) : CommunicationInterface {

//     private var inputStream: InputStream = serialPort.inputStream
//     private var outputStream: OutputStream = serialPort.outputStream
//     private var listening: Boolean = false
    
//     override fun sendData(data: ByteArray) {
//         outputStream.write(data)
//     }

//     override fun startListening() {
//         if (!listening) {
//             listening = true
//             Thread {
//                 var buffer = ByteArray(1024)
//                 while (listening) {
//                     val bytesRead = inputStream.read(buffer)
//                     if (bytesRead > 0) {
//                         onReceiveData(buffer, bytesRead)
//                     }
//                 }
//             }.start()
//         }
//     }

//     override fun stopListening() {
//         listening = false
//     }

//     override fun isListening(): Boolean {
//         return listening
//     }

//     private fun onReceiveData(buffer: ByteArray) {
//         val params: WritableMap = Arguments.createMap()
//         params.putString("message", data.decodeToString())
//         reactApplicationContext
//             .getJSModule(DeviceEventManagerModule.RTCDeviceEventEmitter::class.java)
//             .emit("onMessageReceived", params)
//     }
    
// }