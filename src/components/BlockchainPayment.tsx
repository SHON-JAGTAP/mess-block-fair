import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Wallet, CreditCard } from "lucide-react";

const BlockchainPayment = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("ETH");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transactionType, setTransactionType] = useState("payment");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const generateTransactionHash = () => {
    return "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  };

  const simulateGasFee = (amount: number) => {
    return (amount * 0.002).toFixed(8); // 0.2% gas fee simulation
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    
    try {
      const amountNum = parseFloat(amount);
      const gasFee = parseFloat(simulateGasFee(amountNum));
      const transactionHash = generateTransactionHash();
      
      // Simulate blockchain transaction
      const { error } = await supabase
        .from("blockchain_transactions")
        .insert({
          user_id: user.id,
          transaction_hash: transactionHash,
          amount: amountNum,
          currency,
          transaction_type: transactionType,
          recipient_address: recipientAddress,
          gas_fee: gasFee,
          status: "pending",
          block_number: Math.floor(Math.random() * 1000000) + 18000000, // Simulate block number
        });

      if (error) throw error;

      // Simulate confirmation after 3 seconds
      setTimeout(async () => {
        await supabase
          .from("blockchain_transactions")
          .update({ status: "confirmed" })
          .eq("transaction_hash", transactionHash);
        
        toast({
          title: "Transaction Confirmed!",
          description: `Payment of ${amount} ${currency} has been confirmed on the blockchain.`,
        });
      }, 3000);

      toast({
        title: "Transaction Submitted!",
        description: `Your ${transactionType} of ${amount} ${currency} is being processed.`,
      });

      // Reset form
      setAmount("");
      setRecipientAddress("");
    } catch (error: any) {
      toast({
        title: "Transaction Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <Card className="bg-gradient-card border-border/50">
        <CardContent className="text-center py-8">
          <Wallet className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Please sign in to access blockchain payments</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          <CardTitle>Blockchain Payment</CardTitle>
        </div>
        <CardDescription>
          Send secure cryptocurrency payments on the blockchain
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePayment} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.00000001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ETH">ETH</SelectItem>
                  <SelectItem value="BTC">BTC</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="USDT">USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient Address</Label>
            <Input
              id="recipient"
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="0x..."
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Transaction Type</Label>
            <Select value={transactionType} onValueChange={setTransactionType} disabled={loading}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="transfer">Transfer</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {amount && (
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Amount:</span>
                <span>{amount} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span>Gas Fee:</span>
                <span>{simulateGasFee(parseFloat(amount) || 0)} {currency}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-border">
                <span>Total:</span>
                <span>{(parseFloat(amount) + parseFloat(simulateGasFee(parseFloat(amount) || 0))).toFixed(8)} {currency}</span>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading || !amount || !recipientAddress}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing Transaction...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Payment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BlockchainPayment;