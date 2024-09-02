import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule

class CommunicationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    //private val communication: CommunicationInterface = UartCommunication(/* SerialPort instance */) // Ou MockCommunication para testes
    private val communication: CommunicationInterface = MockCommunication(/* SerialPort instance */) // Ou MockCommunication para testes

    override fun getName(): String {
        return "CommunicationModule"
    }

    init {
        startListening()
    }

    @ReactMethod
    fun startListening() {
        communication.startListening()
    }

    @ReactMethod
    fun stopListening() {
        communication.stopListening()
    }

    @ReactMethod
    fun sendMessage(data: String) {
        communication.send(data.toByteArray())
    }

    @ReactMethod
    fun isListening(): Boolean {
        return communication.isListening()
    }

    private fun sendToReactNative(data: ByteArray) {
        val params: WritableMap = Arguments.createMap()
        params.putString("message", data.decodeToString())
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("onMessageReceived", params)
    }
}
