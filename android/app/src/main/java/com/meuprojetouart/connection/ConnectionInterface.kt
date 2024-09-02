interface CommunicationInterface {

    fun sendData(data: ByteArray)
    fun startListening()
    fun stopListening()
    fun isListening(): Boolean
 
}