import java.io.InputStream
import java.io.OutputStream

class MockCommunication : CommunicationInterface {

    private var listening: Boolean = false
    
    override fun sendData(data: ByteArray) {
        outputStream.write(data)
    }

    override fun startListening() {
        if (!listening) {
            listening = true
            Thread {
                while (listening) {
                    Thread.sleep(5000)
                    onReceiveData(byteArrayOf(0x00, 0x01, 0x02, 0x03))
                }
            }.start()
        }
    }

    override fun stopListening() {
        listening = false
    }

    override fun isListening(): Boolean {
        return listening
    }

    private fun onReceiveData(buffer: ByteArray) {
        val params: WritableMap = Arguments.createMap()
        params.putString("message", data.decodeToString())
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RTCDeviceEventEmitter::class.java)
            .emit("onMessageReceived", params)
    }
    
}